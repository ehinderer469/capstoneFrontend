using ExampleAPI;
using Microsoft.AspNetCore.Routing;

namespace TestProduct
{
    [TestClass]
    public class UnitTestProducts
    {
        [TestMethod]
        public void ProductId_ShouldSetAndGetCorrectly()
        {
            // Arrange
            var product = new Product();

            // Act
            product.ProductId = 123;

            // Assert
            Assert.AreEqual(123, product.ProductId);
        }

        [TestMethod]
        public void Test_ProductName_Property()
        {
            // Arrange
            var product = new Product { ProductName = "Test Product" };

            // Act
            var result = product.ProductName;

            // Assert
            Assert.AreEqual("Test Product", result);
        }

        [TestMethod]
        public void Test_Manufacturer_Property()
        {
            // Arrange
            var product = new Product { manufacturer = "Test Manufacturer" };

            // Act
            var result = product.manufacturer;

            // Assert
            Assert.AreEqual("Test Manufacturer", result);
        }

        [TestMethod]
        public void Test_Category_Property()
        {
            // Arrange
            var product = new Product { category = "Test Category" };

            // Act
            var result = product.category;

            // Assert
            Assert.AreEqual("Test Category", result);
        }

        [TestMethod]
        public void Test_ExpirationDate_Property()
        {
            // Arrange
            var product = new Product { expirationDate = "2023-06-30" };

            // Act
            var result = product.expirationDate;

            // Assert
            Assert.AreEqual("2023-06-30", result);
        }

        [TestMethod]
        public void Test_Price_Property()
        {
            // Arrange
            var product = new Product { price = 9.99 };

            // Act
            var result = product.price;

            // Assert
            Assert.AreEqual(9.99, result);
        }
    }
}