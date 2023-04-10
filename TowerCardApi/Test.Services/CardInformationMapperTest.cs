using AutoMapper;
using TowerCardApi.Core.Entities;
using TowerCardApi.Core.Models;
using FluentAssertions;
using TowerCardApi.Services.Mappings;

namespace Test.Services;

[TestClass]
public class CardInformationMapperTest
{
    [TestMethod]
    public void Test_CardInformationMapping_Passing()
    {
        var card = new CardInformation()
        {
            CardNumber = "1234123412341234",
            Cvc = "123",
            ExpiryDate = "123456",
            Name = "Test"
        };

        var config = new MapperConfiguration(config => config.AddProfile<CardInformationMappingProfile>());
        var mapper = config.CreateMapper();

        var result = mapper.Map<CardEntity>(card);

        result.CardNumber.Should().Be(card.CardNumber);
        result.Cvc.Should().Be(card.Cvc);
        result.ExpiryDate.Should().Be(card.ExpiryDate);
        result.Name.Should().Be(card.Name);

    }
}