using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpCollections
{
    class SchoolRoll
    {
        //Sets don't allow duplicate items
        private HashSet<Student> _students = new HashSet<Student>();

        //Using IEnumerable here doesn't expose any methods that can be used to alter the list, effectively making it read-only w/r/t client classes
        public IEnumerable<Student> Students { get { return _students;  } }

        //Using IEnumerable rather than List allows any othe rtype of collection to be passed it, not just List
        public void AddStudents(IEnumerable<Student> students)
        {
            _students.UnionWith(students);
        }
    }
}
