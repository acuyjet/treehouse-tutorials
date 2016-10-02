using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ComicBookGallery.Models
{
    public class ComicBook
    {
        public int Id { get; set; }
        public string SeriesTitle { get; set; }
        public int IssueNumber { get; set; }
        public string DescriptionHtml { get; set; }
        public Creator[] Creators { get; set; }
        public string Publisher { get; set; }
        public bool Favorite { get; set; }

        //Read-only properties
        public string DisplayText
        {
            get { return SeriesTitle + " #" + IssueNumber; }
        }
        public string CoverImageFileName
        {
            //Filenames should follow the format seriestitle-issuenumber.jpg
            get
            {
                return SeriesTitle.Replace(" ", "-").ToLower() + "-" + IssueNumber + ".jpg";
            }
        }
    }
}