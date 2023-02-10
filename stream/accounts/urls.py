from django.urls import path

from . import views


app_name = "accounts"

urlpatterns = [
    path("users/", views.UserListView.as_view(), name="users"),
    path("user/create", views.UserCreateView.as_view(), name="create"),
    path("user/<int:id>", views.UserRetrieveUpdateDestroyView.as_view(), name="user"),
    path("requests/", views.HitsView.as_view(), name="requests"),
]
