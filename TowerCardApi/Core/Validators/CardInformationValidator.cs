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

        var nullErrorMessage = "'{PropertyName}' must have a value.";
        var numericErrorMessage = "'{PropertyName}' must be Numeric.";
        var lengthErrorMessage = "'{PropertyName}' must be {Length} digits.";

        RuleFor(x => x.CardNumber)
            .NotEmpty()
            .WithMessage(nullErrorMessage)
            .Must(value => value.ToCharArray().All(char.IsDigit))
            .WithMessage(numericErrorMessage)
            .Length(16)
            .WithMessage(lengthErrorMessage);

        RuleFor(x => x.Cvc)
            .NotEmpty()
            .WithMessage(nullErrorMessage)
            .Must(value => value.ToCharArray().All(char.IsDigit))
            .WithMessage(numericErrorMessage)
            .Length(3)
            .WithMessage(lengthErrorMessage);

        RuleFor(x=> x.ExpiryDate)
            .NotEmpty()
            .WithMessage(nullErrorMessage)
            .Must(value => value.ToCharArray().All(char.IsDigit))
            .WithMessage(numericErrorMessage)
            .Length(4)
            .WithMessage(lengthErrorMessage);
    }
}
