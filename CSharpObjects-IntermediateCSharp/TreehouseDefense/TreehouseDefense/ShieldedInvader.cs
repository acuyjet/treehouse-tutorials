using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreehouseDefense
{
    class ShieldedInvader : Invader
    {
        public override int Health { get; protected set; } = 1;

        public ShieldedInvader(Path path) : base(path)
        {
        }

        public override void DecreaseHealth(int factor)
        {
            if (Random.NextDouble() < 0.5)
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
