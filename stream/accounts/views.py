from django.contrib.auth.models import User

from rest_framework.generics import (
    CreateAPIView,
    GenericAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
)
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from .serializers import HitsSerializer, UserSerializer

HITS = 0


def counter(referer):
    global HITS
    if referer.endswith("/"):
        HITS += 1


class UserPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 100


class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = ("id",)
    search_fields = ("pk", "first_name", "last_name", "username", "email")
    pagination_class = UserPagination

    def get(self, request, *args, **kwargs):
        counter(request.META["HTTP_REFERER"])
        return super().get(request, *args, **kwargs)


class UserCreateView(CreateAPIView):
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        counter(request.META["HTTP_REFERER"])
        return super().create(request, *args, **kwargs)


class UserRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    lookup_field = "id"
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        counter(request.META["HTTP_REFERER"])
        return super().get(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        counter(request.META["HTTP_REFERER"])
        return super().update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        counter(request.META["HTTP_REFERER"])
        return super().delete(request, *args, **kwargs)


class HitsView(GenericAPIView):
    serializer_class = HitsSerializer

    def get(self, request, *args, **kwargs):
        serializer = HitsSerializer({"hits": HITS})
        return Response(serializer.data)
