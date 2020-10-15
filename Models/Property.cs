namespace PropertyRental.Models
{
    public class Property
    {
        public int Id { get; set;}
        public string Title {get; set;}
        public string Image {get; set;}
        public decimal Price {get; set;}
        public int Beds  {get; set;}
        public int  Baths  {get; set;}
        public int Area  {get; set;}
        public string Description  {get; set;}    
        public bool Parkign {get; set;}
    }
}