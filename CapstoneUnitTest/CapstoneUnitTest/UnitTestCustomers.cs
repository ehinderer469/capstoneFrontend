using ExampleAPI;
using Microsoft.AspNetCore.Routing;

namespace TestCustomer
{
    [TestClass]
    public class UnitTestCustomers
    {
        [TestMethod]
        public void Test_UserID_Property()
        {
            // Arrange
            var customer = new Customers { userID = "testuser123" };

            // Act
            var result = customer.userID;

            // Assert
            Assert.AreEqual("testuser123", result);
        }

        [TestMethod]
        public void Test_Password_Property()
        {
            // Arrange
            var customer = new Customers { password = "TestPassword123" };

            // Act
            var result = customer.password;

            // Assert
            Assert.AreEqual("TestPassword123", result);
        }

        [TestMethod]
        public void Test_FirstName_Property()
        {
            // Arrange
            var customer = new Customers { firstName = "John" };

            // Act
            var result = customer.firstName;

            // Assert
            Assert.AreEqual("John", result);
        }

        [TestMethod]
        public void Test_LastName_Property()
        {
            // Arrange
            var customer = new Customers { lastName = "Doe" };

            // Act
            var result = customer.lastName;

            // Assert
            Assert.AreEqual("Doe", result);
        }

        [TestMethod]
        public void Test_AddressLine1_Property()
        {
            // Arrange
            var customer = new Customers { addressLine1 = "123 Main St" };

            // Act
            var result = customer.addressLine1;

            // Assert
            Assert.AreEqual("123 Main St", result);
        }

        [TestMethod]
        public void Test_AddressLine2_Property()
        {
            // Arrange
            var customer = new Customers { addressLine2 = "Apt 4B" };

            // Act
            var result = customer.addressLine2;

            // Assert
            Assert.AreEqual("Apt 4B", result);
        }

        [TestMethod]
        public void Test_City_Property()
        {
            // Arrange
            var customer = new Customers { city = "New York" };

            // Act
            var result = customer.city;

            // Assert
            Assert.AreEqual("New York", result);
        }

        [TestMethod]
        public void Test_Zipcode_Property()
        {
            // Arrange
            var customer = new Customers { zipcode = "10001" };

            // Act
            var result = customer.zipcode;

            // Assert
            Assert.AreEqual("10001", result);
        }

        [TestMethod]
        public void Test_State_Property()
        {
            // Arrange
            var customer = new Customers { state = "NY" };

            // Act
            var result = customer.state;

            // Assert
            Assert.AreEqual("NY", result);
        }

        [TestMethod]
        public void Test_EmailAddress_Property()
        {
            // Arrange
            var customer = new Customers { emailAddress = "testuser@example.com" };

            // Act
            var result = customer.emailAddress;

            // Assert
            Assert.AreEqual("testuser@example.com", result);
        }

        [TestMethod]
        public void Test_PhoneNumber_Property()
        {
            // Arrange
            var customer = new Customers { phoneNumber = "555-555-5555" };

            // Act
            var result = customer.phoneNumber;

            // Assert
            Assert.AreEqual("555-555-5555", result);
        }
    }
}