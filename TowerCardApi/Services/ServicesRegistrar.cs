using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics.CodeAnalysis;
using TowerCardApi.Core.Interfaces;
using TowerCardApi.Core.Models;
using TowerCardApi.Core.Validators;
using TowerCardApi.Services.Mappings;
using TowerCardApi.Services.Services;

namespace TowerCardApi.Services;

[ExcludeFromCodeCoverage]
public static class ServicesRegistrar
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddTransient<ICardService, CardService>();
        services.AddScoped<IValidator<CardInformation>, CardInformationValidator>();

        services.AddAutoMapper(typeof(CardInformationMappingProfile).Assembly);

        return services;
    }
}
