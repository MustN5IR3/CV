using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DieFunc : MonoBehaviour
    
{
    private void OnTriggerEnter(Collider other)
    {
        if(other.gameObject.tag == "enemyfist")
        {
            die();
        }
    }
    void die()
    {
        Destroy(gameObject);
    }



}
