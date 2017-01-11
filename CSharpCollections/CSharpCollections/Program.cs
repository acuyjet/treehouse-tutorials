using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpCollections
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<Student> students = new HashSet<Student>
            {
                new Student() {Name = "Sally", GradeLevel = 3 },
                new Student() {Name = "Bob", GradeLevel = 3 },
                new Student() {Name = "Sally", GradeLevel = 2 }
            };

            Student joe = new Student() { Name = "Joe", GradeLevel = 2 };
            students.Add(joe);

            Student duplicateJoe = new Student() { Name = "Joe", GradeLevel = 2 };
            students.Add(duplicateJoe);

            if (students.Contains(joe))
            {
                Console.WriteLine("Hey, Joe");
            }

            //Console.WriteLine(joe.GetHashCode());
            //Console.WriteLine(duplicateJoe.GetHashCode());

            foreach (Student student in students)
            {
                Console.WriteLine($"{student.Name} is in Grade {student.GradeLevel}");
            }
            Console.ReadKey();
        }
    }
}
