using TowerCardApi.Core.Models;
using FluentValidation;

namespace TowerCardApi.Core.Validators;

public class CardInformationValidator : AbstractValidator<CardInformation>
{
    public CardInformationValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.CardNumber)
            .NotEmpty()
            .Must(value => value.ToCharArray().All(char.IsDigit))
            .Length(16);

        RuleFor(x => x.Cvc)
            .NotEmpty()
            .Must(value => value.ToCharArray().All(char.IsDigit))
            .Length(3);

        RuleFor(x=> x.ExpiryDate)
            .NotEmpty()
            .Must(value => value.ToCharArray().All(char.IsDigit))
            .Length(4);
    }
}
