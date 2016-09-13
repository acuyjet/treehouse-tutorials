using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreehouseDefense
{
    class FastInvader : Invader
    {
        public override int Health { get; protected set; } = 2;
        protected override int StepSize { get; } = 2;
        public FastInvader(Path path): base(path)
        {

        }
    }
}
