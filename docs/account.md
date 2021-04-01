---
title: Account
---

Your personal InterMine account allows you to create and manage your private lists, queries, templates etc. You need to create a separate account for each InterMine database you use; we hope to support single sign-on in the future. You can access your account from the top navigation bar.  

### Creating an account

You can create an account through the **LOGIN** tab in the top navigation bar. 

![](/img/login.png)

Click on the "**Create new account**" link shown in the previous screenshot to register by entering a valid email address and a password. You will receive a confirmation email to your email address after you have successfully created an account.

![](/img/register.png)

:::info
Your account information is private and won't be accessible by other users or inspected beyond automatic performance optimisation and updates. You can read our [Privacy Policy](https://intermine.readthedocs.io/en/latest/about/privacy-policy/) for more details. 
:::

### Logging into your account

If you have an existing account, you can sign in to your account using the same email and password used for registration. 

![](/img/email-login.png)

You can also use **Google** or **Elixir** accounts to log in by clicking on either option and follow the instructions. 

![](/img/google.png)

:::info
Remember that you are logged in through an external authentication provider when using Google or Elixir accounts to log in. 
:::

### Profile

The profile sub-tab allows you to set various aspects of your account as follows:

#### User preferences:

![](/img/user-preferences.png)

1. **Inform me by email of newly shared lists -** you can select ✅ to receive an email if someone shares a list with you.
2. **Allow other users to share lists with me without confirmation -** you can allow ✅ users to share lists with you without asking first.
3. **Display name:** Set your public name displayed in your InterMine interface, which can be used when others share lists with you. 
4. **Your preferred email address:** Set the email address you prefer to use for correspondence - for example, if someone shares a list with you. This could be different from the email you use to log in to your account.
5. **The URL of your preferred Galaxy instance:** Results can be exported to [Galaxy](http://galaxyproject.org/) - see [Send results to the galaxy](https://flymine.readthedocs.io/en/latest/results-tables/Documentationresultstables.html#resultsgalaxy). By default, the main galaxy server is set; however, if you routinely use another galaxy instance, you can set this to be the default.

Make sure to click **Save Changes** to update your user preferences.

:::info
Sharing lists is not yet implemented in the BlueGenes interface. However, if you set your email preferences here, they will be relevant should you use the old interface. We hope to implement the sharing lists feature in BlueGenes soon.
:::

#### Change password:

![](/img/password.png)

You can change your password using the **Change password** form shown in the previous screenshot. You need to type in your old and new passwords and click **Save Password** to update your password. 

:::info
Remember, if you are logged in through an external authentication provider, such as Google or Elixir, you have to use their services to change your password.
:::

**API access key:**

API keys are used to access the [InterMine API](https://intermine.readthedocs.org/en/latest/web-services/) features without having to use your username or password. You can change or delete your API key without having to change your password. 

To create an API key, click on the button shown below to generate a new token. If you wish to reuse an API key, you should save it in a safe place. You will only be able to view the API key for the length of this session.

![](</img/api-key (1).png>)

:::info
Generating a new API key will invalidate any existing one. 
:::

#### Delete account:

![](</img/delete-account (1).png>)

![](/img/delete-account-code.png)

To delete your account, you can click **Start Account Deletion**, which will direct you to a confirmation page. You need to copy and paste the confirmation code in the provided input field and click **Delete Account**. Once completed, you will no longer be able to log in to your account and access your content or user preferences on this InterMine instance. 

:::danger
Account deletion cannot be undone. 
:::

### Troubleshooting

#### 1. Are my lists and searches stored permanently?

Yes. When you have an account, any lists or queries you save are stored permanently.

#### 2. What happens to my lists and queries when you make a new database release?

All lists and queries are transferred to the new database release. Sometimes identifiers in lists become outdated, and you will be asked to update your list \(see the [Upgrading lists](lists/lists.md#upgrading-lists) section for more details\). Occasionally we have to make changes to the underlying data model, affecting any queries you have saved. Please contact [Contact Us](contact-us.md) if you would require any further assistance.

