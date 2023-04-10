using System.ComponentModel.DataAnnotations;

namespace TowerCardApi.Core.Models;

public class CardInformation
{
    [Required]
    [MaxLength(50)]
    public string Name { get; set; }
    [Required]
    [MinLength(16)]
    [MaxLength(16)]
    public string CardNumber { get; set; }
    [Required]
    [MinLength(3)]
    [MaxLength(3)]
    public string Cvc { get; set; }
    [Required]
    [MinLength(4)]
    [MaxLength(4)]
    public string ExpiryDate { get; set; }
}
