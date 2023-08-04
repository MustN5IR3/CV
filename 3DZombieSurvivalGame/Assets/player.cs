using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class player : MonoBehaviour

{
    public int mymaxHealth = 100;
    int mycurrentHealth;
    public Animator myanimator;
    // Start is called before the first frame update
    void Start()
    {
        mycurrentHealth = mymaxHealth;

    }

    public void TakkeDamage(int mydamage)
    {
        mycurrentHealth -= mydamage;
        // hurt player
        if (mycurrentHealth <= 0)
        {
            Diee();
        }

    }
    void Diee()
    {
        Cursor.visible = true;
        
        Debug.Log("player died!");
        myanimator.SetBool("imdead", true);


        this.enabled = false;
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex - 1);
        //back to main menu here
    }

}