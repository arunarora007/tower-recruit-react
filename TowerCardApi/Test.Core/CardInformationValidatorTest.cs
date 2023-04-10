using TowerCardApi.Core.Models;
using TowerCardApi.Core.Validators;
using FluentAssertions;
using FluentValidation.TestHelper;

namespace Test.Core;

[TestClass]
public class CardInformationValidatorTest
{
    private readonly CardInformationValidator _validatior;
    private readonly CardInformation card = new CardInformation()
    {
        CardNumber = "1234123412341234",
        Cvc = "123",
        ExpiryDate = "1456",
        Name = "Test"
    };

    public CardInformationValidatorTest()
    {
        _validatior = new CardInformationValidator();
    }


    [TestMethod]
    public void Test_CardInformation_Passing()
    {
        var result = _validatior.TestValidate(card);
        result.IsValid.Should().BeTrue();
        result.Errors.Should().BeEmpty();
    }

    [TestMethod]
    [DataRow("")]
    [DataRow(" ")]
    [DataRow("abc")]
    [DataRow("abcdabcdabcdabcd")]
    [DataRow("123333333333abcd")]
    public void Test_CardInformation_FailingCardNumber(string cardNumber)
    {
        var cardToValidate = card;
        cardToValidate.CardNumber = cardNumber;
        var result = _validatior.TestValidate(card);
        result.ShouldHaveValidationErrorFor(x => x.CardNumber);
    }


    [TestMethod]
    [DataRow("")]
    [DataRow(" ")]
    [DataRow("abc")]
    [DataRow("abcdab")]
    [DataRow("a")]
    [DataRow("12a")]
    public void Test_CardInformation_FailingCvc(string cvc)
    {
        var cardToValidate = card;
        cardToValidate.Cvc = cvc;
        var result = _validatior.TestValidate(card);
        result.ShouldHaveValidationErrorFor(x => x.Cvc);
    }


    [TestMethod]
    [DataRow("")]
    [DataRow(" ")]
    [DataRow("abc")]
    [DataRow("abcdab")]
    [DataRow("a")]
    [DataRow("12a")]
    public void Test_CardInformation_FailingExpiryDate(string expiryDate)
    {
        var cardToValidate = card;
        cardToValidate.ExpiryDate = expiryDate;
        var result = _validatior.TestValidate(card);
        result.ShouldHaveValidationErrorFor(x => x.ExpiryDate);
    }


    [TestMethod]
    [DataRow("")]
    [DataRow(" ")]
    public void Test_CardInformation_FailingName(string name)
    {
        var cardToValidate = card;
        cardToValidate.Name = name;
        var result = _validatior.TestValidate(card);
        result.ShouldHaveValidationErrorFor(x => x.Name);
    }
}