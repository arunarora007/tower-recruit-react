using AutoMapper;
using TowerCardApi.Core.Entities;
using TowerCardApi.Core.Models;

namespace TowerCardApi.Services.Mappings;

public class CardInformationMappingProfile : Profile
{
    public CardInformationMappingProfile()
    {
        CreateMap<CardInformation, CardEntity>()
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.CardNumber, opt => opt.MapFrom(src => src.CardNumber))
            .ForMember(dest => dest.Cvc, opt => opt.MapFrom(src => src.Cvc))
            .ForMember(dest => dest.ExpiryDate, opt => opt.MapFrom(src => src.ExpiryDate))
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()));
    }
}
