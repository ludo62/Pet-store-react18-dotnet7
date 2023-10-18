using System.ComponentModel.DataAnnotations;

namespace Pet_store.Entities
{
    public class ProductEntity
    {
        [Key]

        public long Id { get; set; }

        public string Brand { get; set; }

        public string Title { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
