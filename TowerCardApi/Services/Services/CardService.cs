using TowerCardApi.Core.Entities;
using TowerCardApi.Core.Interfaces;
using TowerCardApi.Core.Models;
using TowerCardApi.Services.Cache;

namespace TowerCardApi.Services.Services;

public class CardService : ICardService
{
    public Guid Create(CardEntity cardInformation)
    {
        InMemoryStorage.cards.Add(cardInformation);
        return Guid.NewGuid();
    }

    public CardEntity Get(Guid id)
    {
        return InMemoryStorage.cards.FirstOrDefault(x => x.Id == id);
    }

    public IEnumerable<CardEntity> GetAll()
    {
        return InMemoryStorage.cards;
    }
}
