using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreehouseDefense
{
    interface IMappable
    {
        MapLocation Location { get; }
    }

    interface IMoveable
    {
        void Move();
    }

    interface IInvader : IMappable, IMoveable
    //Interfaces don't have constructors, and methods don't have implementations
    {
        int Health { get; }

        bool HasScored { get; }

        bool IsDead { get; }

        bool IsActive { get; }

        void DecreaseHealth(int factor);

    }
}

