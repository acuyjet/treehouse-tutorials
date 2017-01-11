using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpCollections
{
    class Student : IComparable<Student>
    {
        public string Name { get; set; }
        public int GradeLevel { get; set; }

        public int CompareTo(Student that)
        {
            int result = this.Name.CompareTo(that.Name);

            if (result == 0)
            {
                result = this.GradeLevel.CompareTo(that.GradeLevel);
            }

            return result;
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode() + GradeLevel.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            Student that = obj as Student;
            if (that == null)
            {
                return false;
            }
            return this.Name == that.Name && this.GradeLevel == that.GradeLevel;
        }
    }
}
