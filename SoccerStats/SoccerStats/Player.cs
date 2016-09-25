using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoccerStats
{

    public class RootObject
    {
        public Player[] Player { get; set; }
    }

    public class Player
    {
        [JsonProperty(PropertyName = "assists")]
        public int Assists { get; set; }

        [JsonProperty(PropertyName = "clean_sheets")]
        public int CleanSheets { get; set; }

        [JsonProperty(PropertyName = "first_name")]
        public string FirstName { get; set; }

        [JsonProperty(PropertyName = "goals_scored")]
        public int GoalsScored { get; set; }

        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "minutes")]
        public int Minutes { get; set; }

        [JsonProperty(PropertyName = "own_goals")]
        public int OwnGoals { get; set; }

        [JsonProperty(PropertyName = "pass_completion")]
        public int PassCompletion { get; set; }

        [JsonProperty(PropertyName = "penalties_earned")]
        public int PenaltiesEarned { get; set; }

        [JsonProperty(PropertyName = "penalties_missed")]
        public int PenaltiesMissed { get; set; }

        [JsonProperty(PropertyName = "penalties_saved")]
        public int PenaltiesSaved { get; set; }

        [JsonProperty(PropertyName = "points_per_game")]
        public double PointsPerGame { get; set; }

        [JsonProperty(PropertyName = "position")]
        public string Position { get; set; }

        [JsonProperty(PropertyName = "red_cards")]
        public int RedCards { get; set; }

        [JsonProperty(PropertyName = "saves")]
        public int Saves { get; set; }

        [JsonProperty(PropertyName = "second_name")]
        public string SecondName { get; set; }

        [JsonProperty(PropertyName = "shots")]
        public int Shots { get; set; }

        [JsonProperty(PropertyName = "team_name")]
        public string TeamName { get; set; }

        [JsonProperty(PropertyName = "yellow_cards")]
        public int YellowCards { get; set; }
    }

}
