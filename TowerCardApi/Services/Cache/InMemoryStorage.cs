using TowerCardApi.Core.Entities;

namespace TowerCardApi.Services.Cache;

public static class InMemoryStorage
{
    public static IList<CardEntity> cards = new List<CardEntity>();
}
