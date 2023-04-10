using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics.CodeAnalysis;
using TowerCardApi.Core.Interfaces;
using TowerCardApi.Services.Mappings;
using TowerCardApi.Services.Services;

namespace TowerCardApi.Services;

[ExcludeFromCodeCoverage]
public static class ServicesRegistrar
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        services.AddTransient<ICardService, CardService>();

        services.AddAutoMapper(typeof(CardInformationMappingProfile).Assembly);

        return services;
    }
}
