using Microsoft.EntityFrameworkCore;
namespace PropertyRental.Models{
    public class DataContext : DbContext
    {   

        /*
        Run migrations everytime someething changes on the models
        - dotnet ef migrations add <someName>
        - dotnet ef database update
        */
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        //Specify wich of your models/classes will become tables on the DB
        public DbSet<Property> Properties {get;set;}

        //  public DbSet<User> User {get;set;}

    }
}