using System;
using Microsoft.AspNetCore.Identity;
using API.Entities; 

namespace API.Entities;

public class User : IdentityUser
{
    public int? AddressId { get; set; }
    public Address? Address { get; set; }
}
