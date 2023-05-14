using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using ExampleAPI;

namespace CapstoneUnitTest
{
    [TestClass]
    public class HTTPTest
    {
        private WebApplicationFactory<Program> _factory;
        private HttpClient _client;

        [TestInitialize]
        public void SetupTests()
        {
            _factory = new WebApplicationFactory<Program>();
            _client = _factory.CreateClient();
        }

        [TestMethod]
        public async Task Patch_Returns_400Response()
        {
            // Arrange
            var patchContent = new StringContent("{ \"ProductName\": \"UpdatedProduct\" }", System.Text.Encoding.UTF8, "application/json");

            // Act
            var response = await _client.PatchAsync("/products/1", patchContent);

            // Assert
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [TestMethod]
        public async Task Path_Returns_200Response()
        {
            // Arrange

            // Act
            var response = await _client.GetAsync("/products");

            // Assert
            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
        }

        [TestCleanup]
        public void Cleanup()
        {
            _client.Dispose();
            _factory.Dispose();
        }
    }
}