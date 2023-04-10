using TowerCardApi.Core.Entities;
using TowerCardApi.Core.Models;

namespace TowerCardApi.Core.Interfaces;

public interface ICardService
{
    CardEntity Get(Guid Id);
    IEnumerable<CardEntity> GetAll();
    Guid Create(CardEntity CardInformation);
}
