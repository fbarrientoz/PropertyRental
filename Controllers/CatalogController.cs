using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;
using System.Linq;


namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext db)
        {
            dbContext = db;
        }

        public IActionResult Index()
        {
            return View();//Catalog Page
        }
        [HttpGet]
        public IActionResult GetProperties()
        {
            var data = dbContext.Properties.ToList();
            //Order by price
            data = data.OrderBy(x=> x.Price).ToList();
            return Json(data);
        }

          public IActionResult Register()
        {
            return View();//Register Page
        }

        [HttpPost]
          public IActionResult SaveProperty([FromBody] Property theProperty)
        {
            //Store the Property into DB
            dbContext.Properties.Add(theProperty);
            dbContext.SaveChanges();

            // System.Console.WriteLine("Saving a property");
            // System.Console.WriteLine(theProperty.Title);

            //T
            // theProperty.Id =1;
            return Json(theProperty);//t           
        }
       [HttpDelete]
        public IActionResult DeleteProperty(int id)
        {
           
            var theProperty = dbContext.Properties.Find(id);
            dbContext.Properties.Remove(theProperty);
            dbContext.SaveChanges();

            return Ok();
        }
        




    }
}