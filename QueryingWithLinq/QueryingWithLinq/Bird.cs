using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdWatcher
{
    public class Bird
    {

        public string CommonName { get; set; }
        public string Family { get; set; }
        public string ScientificName { get; set; }
        public string PrimaryColor { get; set; }
        public string SecondaryColor { get; set; }
        public List<string> TertiaryColors { get; set; }
        public double Length { get; set; }
        public double Width { get; set; }
        public double Weight { get; set; }
        public string Size
        {
            get
            {
                if (Length >= 0 && Length < 15)
                    return "Tiny";
                else if (Length >= 15 && Length < 30)
                    return "Small";
                else if (Length >= 30 && Length < 50)
                    return "Medium";
                else if (Length >= 50)
                    return "Large";
                return "Unknown";
            }
        }
        public List<Sighting> Sightings { get; set; }
        public List<Place> Habitats { get; set; }

        // LeastConcerned,NearThreathened,Vulnerable,Endangered,CriticallyEndangered,ExtinctInTheWild,Extinct
        public string ConservationStatus { get; set; }
        public string ConservationCode { get; set; }
        public override string ToString()
        {
            return string.Format("Name: {0}\n", CommonName);
        }

        public Bird(RandomUtility utility, string family, string commonName, string scientificName,
                    double length, double width, double weight, int sightings, string primaryColor,
                    string secondaryColor, string tertiaryColors, string habitats, string status, string statusCode)
        {
            CommonName = commonName;
            ScientificName = scientificName;
            Length = length;
            Width = width;
            Weight = weight;
            Sightings = utility.AddRandomSightings(sightings);
            PrimaryColor = primaryColor;
            SecondaryColor = secondaryColor;
            TertiaryColors = new List<string>();
            Habitats = new List<Place>();
            ConservationStatus = status;
            ConservationCode = statusCode;

            string[] colors = tertiaryColors.Split('|');
            TertiaryColors.AddRange(colors.ToList());

            string[] countries = habitats.Split('|');
            countries.ToList().ForEach(c =>
            {
                Habitats.Add(new Place { Country = c });
            });
        }
    }


}
