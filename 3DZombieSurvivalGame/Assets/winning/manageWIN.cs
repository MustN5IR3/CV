using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class manageWIN : MonoBehaviour
{
    public static manageWIN instance = null;
    public GameObject WINtext;
    void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }else if (instance != null)
        {
            Destroy(gameObject);
        }
    }

    public void win()
    {
        WINtext.SetActive(true);
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex - 1);
    }
}
