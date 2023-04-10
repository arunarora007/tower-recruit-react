using TowerCardApi.Core.Models;

namespace TowerCardApi.Core.Entities;

public class CardEntity : CardInformation
{
    public Guid Id { get; set; }
}
