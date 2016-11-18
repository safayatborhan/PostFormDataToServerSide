using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using PostFormDataToServerSide.Models;

namespace PostFormDataToServerSide.Models
{
    public class PlayerDBContext : DbContext
    {
        public DbSet<Player> PlayeDB { get; set; }
    }
}