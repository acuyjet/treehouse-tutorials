using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdWatcher
{
    public class Place
    {
        public string Country { get; set; }
        public string City { get; set; }
        //Mountain,Plain,Forest,Desert,Beach,City
        public string TerrainType { get; set; }
        // HumidContinental,Subtropical,Semiarid,Desert,Mediterranean,Marine,Subarctic,Tundra,RainForest
        public string Climate { get; set; }
    }
}
