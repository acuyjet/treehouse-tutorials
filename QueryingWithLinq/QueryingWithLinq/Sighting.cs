using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdWatcher
{
    public class Sighting
    {
        public Bird Bird { get; set; }
        public DateTime SightingDate { get; set; }
        public string ObserverFirstName { get; set; }
        public string ObserverLastName { get; set; }
        public Place Place { get; set; }
    }
}
