using ComicBookGallery.Models;
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
            var comicBook = new ComicBook()
            {
                SeriesTitle = "Saga",
                IssueNumber = 38,
                DescriptionHtml = "<p>\"THE WAR FOR PHANG,\" Part Two. When your babysitter's a ghost, death is never very far away.</p>",
                Creators = new Creator[]
                {
                    new Creator() { Name = "Brian K. Vaughan", Role = "Script" },
                    new Creator() { Name = "Fiona Staples", Role = "Pencils" },
                    new Creator() { Name = "Fiona Staples", Role = "Inks" },
                    new Creator() { Name = "Fiona Staples", Role = "Colors" },
                    new Creator() { Name = "Fonografiks", Role = "Letters" },
                    new Creator() { Name = "Fiona Staples", Role = "Cover" }
                },
                Publisher = "Image Comics"
            };

            return View(comicBook);
        }
    }
}