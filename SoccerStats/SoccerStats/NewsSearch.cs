using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoccerStats
{
    public class NewsSearch
    {
        public string _type { get; set; }
        public Instrumentation instrumentation { get; set; }
        public string readLink { get; set; }
        public int totalEstimatedMatches { get; set; }
        [JsonProperty(PropertyName = "value")]
        public List<NewsResult> NewsResults { get; set; }
    }

    public class Instrumentation
    {
        public string pingUrlBase { get; set; }
        public string pageLoadPingUrl { get; set; }
    }

    public class NewsResult
    {
        [JsonProperty(PropertyName = "name")]
        public string Headline { get; set; }
        public string url { get; set; }
        public string urlPingSuffix { get; set; }
        public Image image { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Summary { get; set; }
        public Provider[] provider { get; set; }
        [JsonProperty(PropertyName = "datePublished")]
        public DateTime DatePublished { get; set; }
        public string category { get; set; }
        public Clusteredarticle[] clusteredArticles { get; set; }
        public double SentimentScore { get; set; }
    }

    public class Image
    {
        public Thumbnail thumbnail { get; set; }
    }

    public class Thumbnail
    {
        public string contentUrl { get; set; }
        public int width { get; set; }
        public int height { get; set; }
    }

    public class Provider
    {
        public string _type { get; set; }
        public string name { get; set; }
    }

    public class Clusteredarticle
    {
        public string name { get; set; }
        public string url { get; set; }
        public string urlPingSuffix { get; set; }
        public string description { get; set; }
        public Provider1[] provider { get; set; }
        public object datePublished { get; set; }
        public string category { get; set; }
    }

    public class Provider1
    {
        public string _type { get; set; }
        public string name { get; set; }
    }

}
