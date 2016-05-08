using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AngularMVCTemplate.Controllers.MVC;

namespace AngularMVCTemplate.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        public class Index : HomeControllerTest
        {
            HomeController controller;

            [TestInitialize]
            public void InitTest()
            {
                controller = new HomeController();
            }

            [TestMethod]
            public void ShouldReturnNotNull()
            {
                var result = controller.Index() as ViewResult;

                Assert.IsNotNull(result);
            }

        }
    }
}
