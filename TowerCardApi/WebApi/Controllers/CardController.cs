using Microsoft.AspNetCore.Mvc;
using TowerCardApi.Core.Interfaces;
using TowerCardApi.Core.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("api/tower/card")]
public class CardController : ControllerBase
{
    private readonly ICardService _cardService;

    public CardController(ICardService cardService)
    {
        _cardService = cardService;
    }

    /// <summary>
    /// API to get all cards in the Database
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public IActionResult GetAllCards()
    {
        return Ok(_cardService.GetAll());
    }

    /// <summary>
    /// API to get a specific cards from database using Id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public IActionResult GetCard(Guid id)
    {
        return Ok(_cardService.Get(id));
    }

    /// <summary>
    /// API to save card in database
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    [HttpPost]
    public void SaveCard([FromBody] CardInformation request)
    {
    }
}
