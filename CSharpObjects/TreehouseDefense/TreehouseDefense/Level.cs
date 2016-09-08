using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreehouseDefense
{
    class Level
    {
        private readonly Invader[] _invaders;

        public Tower[] Towers { get; set; }

        public Level(Invader[] invaders)
        {
            _invaders = invaders;
        }

        //Returns true is player wins; false otherwise
        public bool Play()
        {
            //Level will run until all invaders are neutralized or until invader reaches end of path
            int remainingInvaders = _invaders.Length;
            while (remainingInvaders > 0)
            {
                //Each tower has the opportunity to fire upon invaders
                foreach (Tower tower in Towers)
                {
                    tower.FireOnInvaders(_invaders);
                }

                //Count and move active invaders
                remainingInvaders = 0;
                foreach (Invader invader in _invaders)
                {
                    if (invader.IsActive)
                    {
                        invader.Move();
                        
                        if (invader.HasScored)
                        {
                            return false;
                        }

                        remainingInvaders++;
                    }
                }
            }
            return true;
        }
    }
}
