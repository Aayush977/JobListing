from django import forms
from django.contrib.auth.forms import  UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from account.models import UserProfileInfo
class RegisterForm(forms.Form):
    #username = forms.CharField(label='Entere Username', min_length=4,max_length=150)
    email = forms.EmailField(required=True)
    #password1 = forms.CharField(label='Enter password', widget=forms.PasswordInput)
    #password2 = forms.CharField(label = 'Confirm Password', widget=forms.PasswordInput)
    
    #def clean_username(self):
     #   username = self.cleaned_data['username'].lower()
     #   r = User.objects.filter(username=username)
      #  if r.count():
       #     raise ValidationError('Username already exists')
        #return username
    
    #def clean_email(self):
     #   email = self.cleaned_data['email'].lower()
      #  r = User.objects.filter(email=email)
       # if r.count():
        #    raise ValidationError('Email already exists')
       # return email

    #def clean_password2(self):
     #   password1 = self.cleaned_data.get('password1')
      #  password2 = self.cleaned_data.get('password2')

       # if password1 and password2 and password1 != password2:
        #    raise ValidationError("Password don't match")
        #return password2
    class Meta:
        model = User
        fields = ('username','email','password1','password2')
    ''' def save(self, commit=True):
        user = super(UserCreationForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user '''
class UserProfileInfoForm(forms.ModelForm):
    class Meta:
        model = UserProfileInfo
        fields = ['profile_pic']