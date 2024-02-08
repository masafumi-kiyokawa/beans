require "test_helper"

class SiteControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get "/api/beans"
    assert_response :success
  end
end
