using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreehouseDefense
{
    class ShieldedInvader : Invader
    {
        private static Random _random = new Random();

        public ShieldedInvader(Path path) : base(path)
        {
        }

        public override void DecreaseHealth(int factor)
        {
            if (_random.NextDouble() < 0.5)
            {
                base.DecreaseHealth(factor);
            }
            else
            {
                Console.WriteLine("Shot at a shielded invader, but it sustained no damage.");
            }
        }
    }
}
