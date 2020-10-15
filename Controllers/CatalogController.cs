using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;
namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {
        public IActionResult Index()
        {
            return View();//Catalog Page
        }

          public IActionResult Register()
        {
            return View();//Register Page
        }

        [HttpPost]
          public IActionResult SaveProperty([FromBody] Property theProperty)
        {
            //Store the Property into DB
            System.Console.WriteLine("Saving a property");
            System.Console.WriteLine(theProperty.Title);

            //
            theProperty.Id =1;
            return Json(theProperty);


           
        }




    }
}