using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ComicBookGallery.Controllers
{
    public class ComicBooksController : Controller
    {
        public ActionResult Detail()
        {
            ViewBag.SeriesTitle = "Saga";
            ViewBag.IssueNumber = 38;
            ViewBag.Description = "<p>\"THE WAR FOR PHANG,\" Part Two. When your babysitter's a ghost, death is never very far away.</p>";
            ViewBag.Credits = new string[]
            {
                "Script: Brian K. Vaughan",
                "Pencils: Fiona Staples",
                "Inks: Fiona Staples",
                "Colors: Fiona Staples",
                "Letters: Fonografiks",
                "Cover: Fiona Staples"
            };

            return View();
        }
    }
}