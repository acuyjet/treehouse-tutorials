using System;

namespace TreehouseDefense
{
    class Invader
    {
        private readonly Path _path;
        //Keeps track of invader's location on the path
        private int _pathStep = 0;

        protected virtual int StepSize { get; } = 1;

        //Computed property
        public MapLocation Location => _path.GetLocationAt(_pathStep);

        public virtual int Health { get; protected set; } = 2;

        //Computed property
        public bool HasScored { get { return _pathStep >= _path.Length; } }

        public bool IsDead => Health <= 0;
        public bool IsActive => !(IsDead || HasScored);

        public Invader(Path path)
        {
            _path = path;
        }

        //Each method uses a different syntax
        public void Move() => _pathStep += StepSize;

        public virtual void DecreaseHealth(int factor)
        {
            Health -= factor;
            Console.WriteLine("You hit an invader!");
        }
    }
}