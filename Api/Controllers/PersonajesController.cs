using Microsoft.AspNetCore.Mvc;
using Api.Models;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PersonajesController : ControllerBase
{
    private static readonly List<Personaje> Personajes = new()
    {
        new Personaje { Id = 1, Nombre = "Kris", Rol = "Protagonista silencioso" },
        new Personaje { Id = 2, Nombre = "Susie", Rol = "Compañera ruda" },
        new Personaje { Id = 3, Nombre = "Ralsei", Rol = "Príncipe guía" },
        new Personaje { Id = 4, Nombre = "Noelle", Rol = "Maga de hielo" }
    };

    [HttpGet]
    public ActionResult<List<Personaje>> GetAll()
    {
        return Ok(Personajes);
    }

    [HttpPost]
    public ActionResult<Personaje> Create(Personaje nuevoPersonaje)
    {
        nuevoPersonaje.Id = Personajes.Max(p => p.Id) + 1;
        Personajes.Add(nuevoPersonaje);
        return Ok(nuevoPersonaje);
    }
}