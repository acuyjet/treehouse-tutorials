using ComicBookGallery.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComicBookGallery.Data
{
    public class ComicBookRepository
    {
        private static ComicBook[] _comicBooks = new ComicBook[]
        {
        new ComicBook()
        {
            Id = 1,
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
            Publisher = "Image Comics",
            Favorite = false
        },
        new ComicBook()
        {
            Id = 2,
            SeriesTitle = "Jessica Jones",
            IssueNumber = 1,
            DescriptionHtml = "<pShe is back after a decade! A lot has changed in the Marvel Universe and there are still many secrets hiding in the shadows. Secrets only a special woman like Jessica Jones can hope to uncover. Discover the haunting secrets from Jessica’s past in this blistering new series. Alias Investigations is open for business.</p>",
            Creators = new Creator[]
            {
                new Creator() { Name = "Brian Michael Bendis", Role = "Script" },
                new Creator() { Name = "Michael Gaydos", Role = "Pencils" },
                new Creator() { Name = "Michael Gaydos", Role = "Inks" },
                new Creator() { Name = "Matt Hollingsworth", Role = "Colors" },
                new Creator() { Name = "Cory Petit", Role = "Letters" },
                new Creator() { Name = "David Mack", Role = "Cover" }
            },
            Publisher = "Marvel Comics",
            Favorite = true
            },
        new ComicBook()
        {
            Id = 3,
            SeriesTitle = "Pretty Deadly",
            IssueNumber = 10,
            DescriptionHtml = "<p>The second arc concludes with the death of Sarah.</p>",
            Creators = new Creator[]
            {
                new Creator() { Name = "Kelly Sue DeConnick", Role = "Script" },
                new Creator() { Name = "Emma Ríos", Role = "Pencils" },
                new Creator() { Name = "Emma Ríos", Role = "Inks" },
                new Creator() { Name = "Jordie Bellaire", Role = "Colors" },
                new Creator() { Name = "Clayton Cowles", Role = "Letters" },
                new Creator() { Name = "Emma Ríos", Role = "Cover" }
            },
            Publisher = "Image Comics",
            Favorite = false
            }
        };

        public ComicBook GetComicBook(int id)
        {
            ComicBook comicBookToReturn = null;
            foreach (var comicBook in _comicBooks)
            {
                if (comicBook.Id == id)
                {
                    comicBookToReturn = comicBook;
                    break;
                }
            }

            return comicBookToReturn;
        }

    }
}
