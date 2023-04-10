using TowerCardApi.Core.Entities;
using TowerCardApi.Core.Interfaces;
using TowerCardApi.Services.Cache;
using TowerCardApi.Services.Services;

namespace TowerCardApi.Test.Services;

[TestClass]
public class CardServiceTest
{
    private readonly ICardService repo = new CardService();

    [TestMethod]
    public void Test_AddCardEntity_Passing()
    {
        var entity = new CardEntity()
        {
             Id = Guid.NewGuid(),
              CardNumber = "1234123412341234",
              Cvc = "123",
              ExpiryDate = "1256",
              Name = "Test"
        };

        repo.Create(entity);


        CollectionAssert.Contains(InMemoryStorage.cards.ToList(), entity);
    }
}
