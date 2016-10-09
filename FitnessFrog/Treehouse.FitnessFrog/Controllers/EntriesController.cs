using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Treehouse.FitnessFrog.Data;
using Treehouse.FitnessFrog.Models;

namespace Treehouse.FitnessFrog.Controllers
{
    public class EntriesController : Controller
    {
        private EntriesRepository _entriesRepository = null;

        public EntriesController()
        {
            _entriesRepository = new EntriesRepository();
        }

        public ActionResult Index()
        {
            List<Entry> entries = _entriesRepository.GetEntries();

            // Calculate the total activity.
            double totalActivity = entries
                .Where(e => e.Exclude == false)
                .Sum(e => e.Duration);

            // Determine the number of days that have entries.
            int numberOfActiveDays = entries
                .Select(e => e.Date)
                .Distinct()
                .Count();

            ViewBag.TotalActivity = totalActivity;
            ViewBag.AverageDailyActivity = (totalActivity / (double)numberOfActiveDays);

            return View(entries);
        }

        public ActionResult Add()
        {
            var entry = new Entry()
            {
                Date = DateTime.Today,
            };

            SetupActivitiesSelectListItems();

            return View(entry);
        }

        [HttpPost]
        public ActionResult Add(Entry entry)
        {
            ValidateEntry(entry);

            if (ModelState.IsValid)
            {
                _entriesRepository.AddEntry(entry);

                return RedirectToAction("Index");
            }

            SetupActivitiesSelectListItems();

            return View(entry);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            //Get requested entry from repository
            Entry entry = _entriesRepository.GetEntry((int)id);

            //Return status of Not Found if entry isn't found
            if (entry == null)
            {
                return HttpNotFound();
            }

            //Populate Activities selct list items ViewBag property
            SetupActivitiesSelectListItems();

            //Pass entry to view
            return View(entry);
        }

        [HttpPost]
        public ActionResult Edit(Entry entry)
        {
            //Validate entry
            ValidateEntry(entry);

            //If entry is valid
            if (ModelState.IsValid)
            {
                //Use repository to update entry
                _entriesRepository.UpdateEntry(entry);

                //Redirect user to Entries list page
                return RedirectToAction("Index");
            }

            //Populate activities select list items ViewBag property
            SetupActivitiesSelectListItems();

            return View(entry);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            return View();
        }

        private void ValidateEntry(Entry entry)
        {
            //If no Duration field validation errors, then make sure Duration is greater than zero
            if (ModelState.IsValidField("Duration") && entry.Duration <= 0)
            {
                ModelState.AddModelError("Duration", "The Duration field value must be greater than zero.");
            }
        }

        private void SetupActivitiesSelectListItems()
        {
            ViewBag.ActivitiesSelectListItems = new SelectList(Data.Data.Activities, "Id", "Name");
        }
    }
}