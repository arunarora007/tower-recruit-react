using AutoMapper;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using TowerCardApi.Core.Entities;
using TowerCardApi.Core.Interfaces;
using TowerCardApi.Core.Models;

namespace WebApi.Controllers;

[ApiController]
[Route("api/tower/card")]
public class CardController : ControllerBase
{
    private readonly ICardService _cardService;
    private readonly IMapper _mapper;
    private readonly IValidator<CardInformation> _validator;

    public CardController(ICardService cardService, IMapper mapper, IValidator<CardInformation> validator)
    {
        _cardService = cardService;
        _mapper = mapper;
        _validator = validator;        
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
    public async Task<IActionResult> SaveCard([FromBody] CardInformation request)
    {
        var result = await _validator.ValidateAsync(request);
        if (result.IsValid)
        {
            var cardObject = _mapper.Map<CardEntity>(request);
            var cardId = _cardService.Create(cardObject);
            return CreatedAtAction(nameof(GetCard), new { id = cardId }, request);
        }
        return BadRequest(result);
    }
}
