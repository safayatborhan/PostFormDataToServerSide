using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PostFormDataToServerSide.Models;
using System.Data.Entity;

namespace PostFormDataToServerSide.Controllers
{
    public class PlayerController : Controller
    {

        PlayerDBContext context = new PlayerDBContext();
        // GET: Player
        public JsonResult AddPlayer(Player player)
        {
            context.PlayeDB.Add(player);
            context.SaveChanges();
            return Json(new { status = "Player data has been recorded" });
        }

        public JsonResult GetPlayer()
        {
            List<Player> PlayerList = new List<Player>();
            PlayerList = context.PlayeDB.ToList();
            return Json(new { list = PlayerList }, JsonRequestBehavior.AllowGet);
        }
    }
}